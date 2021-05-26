/* eslint-disable */
function copyToClipboard() {
  let count = 0;
  const pre = document.querySelectorAll("pre");
  pre.forEach((snippet) => {
    let button = document.createElement("button");
    let modalContent = document.createElement("div");

    button.className = "copy-btn";
    button.classList.add("modal-button");
    button.setAttribute("data-modal-id", "copyModal" + count);
    modalContent.className = "modal";
    modalContent.setAttribute("data-modal-id", "copyModal" + count);

    button.innerHTML = "<i class='far fa-copy fa-2x'></i>";
    modalContent.innerHTML = `<div class='modal-content--sm outset-neomo'> 
                               <p>Text has been copied to the clipboard.</p>
                               <span class='modal-close'>&times;</span>
                              </div>`;
    snippet.appendChild(button);
    snippet.appendChild(modalContent);
    count += 1;
  });
  let copyCode = new ClipboardJS(".copy-btn", {
    target: function (trigger) {
      return trigger.previousElementSibling;
    },
  });

  copyCode.on("success", function (event) {
    event.clearSelection();
    showTooltip(event.trigger, "Copied!");
  });

  copyCode.on("error", function (event) {
    showTooltip(event.trigger, fallbackMessage(event.action));
  });

  function clearTooltip(event) {
    event.currentTarget.setAttribute("class", "copy-btn");
    event.currentTarget.removeAttribute("aria-label");
  }

  function showTooltip(elem, msg) {
    elem.setAttribute("class", "copy-btn tooltipped tooltipped-s");
    elem.setAttribute("aria-label", msg);
  }

  function fallbackMessage(action) {
    let actionMsg = "";
    let actionKey = action === "cut" ? "X" : "C";
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
      actionMsg = "No support :(";
    } else if (/Mac/i.test(navigator.userAgent)) {
      actionMsg = "Press ⌘-" + actionKey + " to " + action;
    } else {
      actionMsg = "Press Ctrl-" + actionKey + " to " + action;
    }
    return actionMsg;
  }
}
