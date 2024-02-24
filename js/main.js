window.addEventListener('DOMContentLoaded', () => {
  const elSidebarButton = document.querySelector('.sidebar-menu-toggler'),
    elSidebar = document.querySelector('.sidebar'),
    elHeaderLogo = document.querySelector('.sidebar__link')


  if(elSidebarButton) {
    elSidebarButton.addEventListener('click', () => {
      elHeaderLogo.textContent = 'Inc'
      if(elSidebar.classList.contains('sidebar-open')) {
        elSidebar.classList.remove('sidebar-open')
        elSidebar.classList.add('sidebar-close')
      } else {
        elSidebar.classList.remove('sidebar-close')
        elSidebar.classList.add('sidebar-open')
        elHeaderLogo.textContent = 'Kadirov Inc'
      }
    })
  }
})
