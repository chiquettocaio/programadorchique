const sidebar = document.querySelector('.sidebar-js')
const toggleSidebarStateBtn = document.querySelector('.toggle-sidebar-state')

toggleSidebarStateBtn.addEventListener('click', () => {
  toggleSidebarState()
})

function toggleSidebarState () {
  sidebar.classList.toggle('sidebar-hidden')

  sidebar.classList.toggle('items-center')
  sidebar.classList.toggle('w-80')
  sidebar.classList.toggle('w-24')
  sidebar.classList.toggle('px-4')
}