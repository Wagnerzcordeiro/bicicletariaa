/* ==========================================
   BICICLETARIA DO GRAU 5.0 — JavaScript
   ========================================== */

// ---- Configuração Central ----
const CONFIG = {
  whatsappNumber: '5511965504747',
  businessName: 'Bicicletaria do Grau 5.0',
  address: 'R. Serra dos Dois Irmãos, 475 - Jardim Amalia, São Paulo - SP, 05890-300'
};

// ---- Inicialização ----
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initHeader();
  initFAQ();
  initFormValidation();
  initBackToTop();
});

// ---- Menu Mobile ----
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-nav-overlay');
  
  if (!toggle || !nav || !overlay) return;
  
  function closeMenu() {
    toggle.classList.remove('active');
    nav.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  
  function openMenu() {
    toggle.classList.add('active');
    nav.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  toggle.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  
  overlay.addEventListener('click', closeMenu);
  
  // Fechar ao clicar em link do menu
  nav.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Fechar com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
    }
  });
}

// ---- Rolagem Suave ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ---- Header com Scroll ----
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  function updateHeader() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

// ---- Animações de Entrada ----
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
  
  if (!elements.length) return;
  
  // Verificar se prefers-reduced-motion está ativo
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(el => observer.observe(el));
}

// ---- FAQ Acordeão ----
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (!question || !answer) return;
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Fechar todos os outros
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
          const otherBtn = other.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });
      
      // Toggle atual
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });
    
    // Suporte a teclado
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
}

// ---- Validação do Formulário e Integração WhatsApp ----
function initFormValidation() {
  const form = document.getElementById('orcamento-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Limpar erros anteriores
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    
    let isValid = true;
    
    // Campos obrigatórios
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('error');
        isValid = false;
      }
    });
    
    // Validar telefone
    const telefone = form.querySelector('#telefone');
    if (telefone && telefone.value.trim()) {
      const phoneClean = telefone.value.replace(/\D/g, '');
      if (phoneClean.length < 10 || phoneClean.length > 11) {
        telefone.classList.add('error');
        isValid = false;
      }
    }
    
    if (!isValid) {
      // Scroll para o primeiro erro
      const firstError = form.querySelector('.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
      return;
    }
    
    // Montar mensagem
    const message = buildWhatsAppMessage(form);
    
    // Abrir WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  });
  
  // Remover erro ao digitar
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('error');
    });
  });
  
  // Máscara de telefone
  const telefoneInput = form.querySelector('#telefone');
  if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      
      if (value.length > 6) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        e.target.value = `(${value}`;
      }
    });
  }
}

function buildWhatsAppMessage(form) {
  const nome = form.querySelector('#nome')?.value.trim() || '';
  const telefone = form.querySelector('#telefone')?.value.trim() || '';
  const tipoBike = form.querySelector('#tipo-bike')?.value || '';
  const marcaModelo = form.querySelector('#marca-modelo')?.value.trim() || '';
  const situacao = form.querySelector('#situacao')?.value.trim() || '';
  const servico = form.querySelector('#servico')?.value || '';
  const descricao = form.querySelector('#descricao')?.value.trim() || '';
  const observacoes = form.querySelector('#observacoes')?.value.trim() || '';
  
  let msg = `🔧 *Solicitação de Orçamento*\n`;
  msg += `📍 ${CONFIG.businessName}\n`;
  msg += `━━━━━━━━━━━━━━━━━━\n\n`;
  
  msg += `👤 *Dados do Cliente*\n`;
  msg += `• Nome: ${nome}\n`;
  msg += `• Telefone: ${telefone}\n\n`;
  
  msg += `🚲 *Informações da Bicicleta*\n`;
  msg += `• Tipo: ${tipoBike}\n`;
  if (marcaModelo) msg += `• Marca/Modelo: ${marcaModelo}\n`;
  if (situacao) msg += `• Situação: ${situacao}\n`;
  msg += `\n`;
  
  msg += `🛠️ *Serviço Desejado*\n`;
  msg += `• Categoria: ${servico}\n`;
  if (descricao) msg += `• Descrição: ${descricao}\n`;
  msg += `\n`;
  
  if (observacoes) {
    msg += `📝 *Observações*\n`;
    msg += `${observacoes}\n\n`;
  }
  
  msg += `━━━━━━━━━━━━━━━━━━\n`;
  msg += `Mensagem gerada pelo site ${CONFIG.businessName}`;
  
  return msg;
}

// ---- Envio via link de serviço ----
function sendWhatsAppService(serviceName) {
  const msg = `Olá! Gostaria de solicitar um orçamento para o serviço de *${serviceName}* na ${CONFIG.businessName}. Podem me ajudar?`;
  const encodedMessage = encodeURIComponent(msg);
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}

// ---- Botão Voltar ao Topo ----
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  
  function toggleButton() {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }
  
  window.addEventListener('scroll', toggleButton, { passive: true });
  
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  toggleButton();
}
