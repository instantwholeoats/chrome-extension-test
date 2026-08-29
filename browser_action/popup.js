function setDocumentTitle(title) {
  document.title = title
}

async function send() {
  const status = document.querySelector('#status')
  try {
    const [currentTab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    })
    if (!currentTab?.id) {
      throw new Error('Active tab is unavailable')
    }
    await chrome.scripting.executeScript({
      target: { tabId: currentTab.id },
      func: setDocumentTitle,
      args: ['hayashi']
    })
    status.textContent = 'Done'
  } catch (error) {
    status.textContent = `Unable to update this page: ${error.message}`
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#send').addEventListener('click', send)
})
