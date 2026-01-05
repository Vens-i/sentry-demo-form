document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('checkout-form');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.email || !data.name || !data.card) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = '❌ Please fill in all fields.';
      return;
    }
    
    // Simulate API call
    try {
      // BREAKPOINT: This can be changed to simulate server errors
      const shouldSucceed = true;
      
      if (shouldSucceed) {
        form.style.display = 'none';
        successMessage.style.display = 'block';
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = '❌ Server error. Please try again.';
    }
  });
});
