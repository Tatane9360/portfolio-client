import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useGsapAnimations() {
  useEffect(() => {
    // Mouvement réduit : le contenu est déjà visible par défaut, on ne joue rien.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let fallback: number;
    const ctx = gsap.context(() => {
      /* --- Moment focal : le rideau du loader se lève sur l'entrée du héros --- */
      const heroTl = gsap.timeline({ paused: true, defaults: { ease: 'power4.out' } });
      heroTl
        .from('.hero-content > div:first-child', { y: -40, opacity: 0, scale: 0.9, duration: 0.5, ease: 'back.out(1.6)' }, 0)
        .from('.shape', { scale: 0, opacity: 0, rotation: -90, duration: 0.5, ease: 'back.out(2)', stagger: 0.12 }, 0.1)
        .from('.hero-content h1 span:nth-child(2)', { x: -80, opacity: 0, duration: 0.6 }, 0.15)
        .from('.hero-content h1 span:last-child', { x: 80, opacity: 0, rotation: -4, duration: 0.6 }, 0.3)
        .from('.hero-content > p', { y: 40, opacity: 0, duration: 0.5 }, 0.5);

      const play = () => heroTl.play();
      window.addEventListener('loader:done', play, { once: true });
      // filet de sécurité si le loader ne signale jamais la fin
      fallback = window.setTimeout(play, 4500);

      /* --- Formes du héros : flottaison (yPercent) + profondeur au scroll (y) ---
         Deux canaux de transform distincts, sinon les deux tweens se battent. */
      gsap.utils.toArray<HTMLElement>('.shape').forEach((shape, i) => {
        gsap.to(shape, {
          yPercent: 12,
          rotation: '+=8',
          duration: 2 + i * 0.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
        gsap.to(shape, {
          y: -300 * Number(shape.dataset.speed),
          ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
        });
      });

      // Le héros s'efface en cédant la place à la suite
      gsap.to('.hero-content', {
        y: -150,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      /* --- Marquee : la vitesse suit le scroll --- */
      gsap.to('.marquee-container', {
        x: '-50%',
        ease: 'none',
        scrollTrigger: { trigger: '.marquee-container', start: 'top bottom', end: 'bottom top', scrub: 1 },
      });

      /* --- Problème : les deux cartes se décalent en profondeur --- */
      gsap.utils.toArray<HTMLElement>('.problem-card').forEach((card) => {
        gsap.from(card, {
          y: 80 * Number(card.dataset.speed),
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        });
      });

      /* --- Listes : un seul déclencheur par grille, stagger plafonné --- */
      const revealList = (selector: string) => {
        const items = gsap.utils.toArray<HTMLElement>(selector);
        if (!items.length) return;
        gsap.from(items, {
          y: 60,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: Math.min(0.1, 0.4 / items.length),
          scrollTrigger: { trigger: items[0].parentElement, start: 'top 85%' },
        });
      };
      revealList('.expertise-card');
      revealList('.process-step');

      /* --- Projets : parallaxe douce --- */
      gsap.utils.toArray<HTMLElement>('.project-item').forEach((project) => {
        const speed = Number(project.dataset.speed);
        gsap.fromTo(
          project,
          { y: 150 * speed },
          { y: -50 * speed, ease: 'none', scrollTrigger: { trigger: project, start: 'top bottom', end: 'bottom top', scrub: true } }
        );
      });

      /* --- FAQ : les cartes arrivent latéralement --- */
      gsap.utils.toArray<HTMLElement>('.faq-item').forEach((item) => {
        gsap.from(item, {
          x: -60 * Number(item.dataset.speed),
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%' },
        });
      });

      /* --- Contact --- */
      gsap.utils.toArray<HTMLElement>('#contact .parallax-element').forEach((el) => {
        gsap.from(el, {
          y: 200 * (Number(el.dataset.speed) || 1),
          ease: 'none',
          scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'bottom bottom', scrub: 1 },
        });
      });

      // Les boucles infinies s'arrêtent quand l'onglet passe en arrière-plan
      const onVisibility = () => {
        gsap.globalTimeline.timeScale(document.hidden ? 0 : 1);
      };
      document.addEventListener('visibilitychange', onVisibility);

      return () => {
        window.removeEventListener('loader:done', play);
        document.removeEventListener('visibilitychange', onVisibility);
      };
    });

    return () => {
      clearTimeout(fallback);
      ctx.revert();
    };
  }, []);
}
