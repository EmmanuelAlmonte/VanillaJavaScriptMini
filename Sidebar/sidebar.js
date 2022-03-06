const showSidebarButton = document.querySelector('.sidebar-toggle')
const sideBar = document.querySelector('.sidebar')
const closeSidebarButton = document.querySelector('.close-btn')

showSidebarButton.addEventListener('click', () => {
  !sideBar.classList.contains('show-sidebar')
    ? sideBar.classList.add('show-sidebar')
    : sideBar.classList.remove('show-sidebar');
})

closeSidebarButton.addEventListener('click', () => {
  sideBar.classList.remove('show-sidebar')
})
