// Interactive particle network background
class ParticleNetwork {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 200 };
        this.colors = [
            { r: 0, g: 123, b: 255 },     // Blue
            { r: 255, g: 107, b: 53 }     // Orange
        ];

        this.init();
    }

    init() {
        // Style canvas
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';

        document.body.insertBefore(this.canvas, document.body.firstChild);

        this.resize();
        this.createParticles();
        this.setupEventListeners();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const numberOfParticles = Math.floor((this.canvas.width * this.canvas.height) / 8000);

        for (let i = 0; i < numberOfParticles; i++) {
            const colorIndex = Math.floor(Math.random() * this.colors.length);
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7,
                radius: Math.random() * 1.5 + 0.8,
                color: this.colors[colorIndex],
                baseSize: Math.random() * 1.5 + 0.8,
                pulseOffset: Math.random() * Math.PI * 2
            });
        }
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.particles = [];
            this.createParticles();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    drawParticle(particle, time) {
        // Pulsing effect
        const pulse = Math.sin(time * 0.002 + particle.pulseOffset) * 0.3 + 1;
        const currentRadius = particle.baseSize * pulse;

        // Glow effect (dimmer)
        const gradient = this.ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, currentRadius * 3
        );
        gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.4)`);
        gradient.addColorStop(0.5, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.15)`);
        gradient.addColorStop(1, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0)`);

        // Draw glow
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, currentRadius * 3, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();

        // Draw core (dimmer)
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.5)`;
        this.ctx.fill();

        particle.radius = currentRadius;
    }

    drawConnections(particle, index) {
        for (let j = index + 1; j < this.particles.length; j++) {
            const other = this.particles[j];
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                const opacity = 0.2 * (1 - distance / 150);

                // Create gradient between particle colors
                const gradient = this.ctx.createLinearGradient(
                    particle.x, particle.y,
                    other.x, other.y
                );
                gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`);
                gradient.addColorStop(1, `rgba(${other.color.r}, ${other.color.g}, ${other.color.b}, ${opacity})`);

                this.ctx.beginPath();
                this.ctx.strokeStyle = gradient;
                this.ctx.lineWidth = 1.5;
                this.ctx.moveTo(particle.x, particle.y);
                this.ctx.lineTo(other.x, other.y);
                this.ctx.stroke();
            }
        }
    }

    drawMouseConnections(particle) {
        if (this.mouse.x !== null && this.mouse.y !== null) {
            const dx = particle.x - this.mouse.x;
            const dy = particle.y - this.mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.mouse.radius) {
                const opacity = 0.5 * (1 - distance / this.mouse.radius);

                // Gradient from particle color to white (cursor)
                const gradient = this.ctx.createLinearGradient(
                    particle.x, particle.y,
                    this.mouse.x, this.mouse.y
                );
                gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity * 0.6})`);

                this.ctx.beginPath();
                this.ctx.strokeStyle = gradient;
                this.ctx.lineWidth = 2.5;
                this.ctx.moveTo(particle.x, particle.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.stroke();

                // Draw glow at cursor
                const glowSize = 15 * (1 - distance / this.mouse.radius);
                const cursorGlow = this.ctx.createRadialGradient(
                    this.mouse.x, this.mouse.y, 0,
                    this.mouse.x, this.mouse.y, glowSize
                );
                cursorGlow.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity * 0.5})`);
                cursorGlow.addColorStop(1, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0)`);

                this.ctx.beginPath();
                this.ctx.arc(this.mouse.x, this.mouse.y, glowSize, 0, Math.PI * 2);
                this.ctx.fillStyle = cursorGlow;
                this.ctx.fill();

                // Push particles away from mouse
                const force = (this.mouse.radius - distance) / this.mouse.radius;
                const angle = Math.atan2(dy, dx);
                particle.vx += Math.cos(angle) * force * 0.15;
                particle.vy += Math.sin(angle) * force * 0.15;
            }
        }
    }

    updateParticle(particle) {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Bounce off edges
        if (particle.x < 0 || particle.x > this.canvas.width) {
            particle.vx *= -1;
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > this.canvas.height) {
            particle.vy *= -1;
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
        }

        // Add small random movement
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Limit velocity
        const maxVelocity = 2;
        const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (velocity > maxVelocity) {
            particle.vx = (particle.vx / velocity) * maxVelocity;
            particle.vy = (particle.vy / velocity) * maxVelocity;
        }
    }

    animate(time = 0) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle, index) => {
            this.updateParticle(particle);
            this.drawParticle(particle, time);
            this.drawConnections(particle, index);
            this.drawMouseConnections(particle);
        });

        requestAnimationFrame((t) => this.animate(t));
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ParticleNetwork();
});
