const sidebar = document.querySelector('.sidebar-js')
const toggleSidebarStateBtn = document.querySelector('.toggle-sidebar-state')
const logoutBtn = document.querySelector('.logout-btn')

toggleSidebarStateBtn.addEventListener('click', () => {
  toggleSidebarState()
})

logoutBtn.addEventListener('click', () => {
  sidebar.classList.toggle('dark-theme')
})

function toggleSidebarState () {
  sidebar.classList.toggle('sidebar-hidden')

  sidebar.classList.toggle('items-center')
  sidebar.classList.toggle('w-80')
  sidebar.classList.toggle('w-24')
  sidebar.classList.toggle('px-4')
}