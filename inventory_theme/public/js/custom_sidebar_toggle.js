frappe.ready(() => {
  const toggleBtn = document.createElement('button');
  toggleBtn.id = "sidebarToggle";
  toggleBtn.innerHTML = "☰";
  toggleBtn.style.cssText = `
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 9999;
    background: #fff;
    border: none;
    padding: 5px 10px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  `;

  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-collapsed");
  });
});
