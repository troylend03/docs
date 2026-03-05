// Tidio Live Chat Widget
(function() {
  var script = document.createElement("script");
  script.src = "//code.tidio.co/z0mkdaizjuxmystdytsps0w5v74iuwpr.js";
  script.async = true;
  document.body.appendChild(script);

  // Auto-open Tidio when landing on the live chat page
  function openChatOnPage() {
    if (window.location.pathname.indexOf("/support/live-chat") !== -1) {
      if (window.tidioChatApi) {
        window.tidioChatApi.open();
      }
    }
  }

  // Try to open when Tidio is ready
  document.addEventListener("tidioChat-ready", openChatOnPage);

  // Intercept clicks on the "Live Customer Support" card to open Tidio chat
  document.addEventListener("click", function(e) {
    var link = e.target.closest('a[href="/support/live-chat"]');
    if (link) {
      e.preventDefault();
      if (window.tidioChatApi) {
        window.tidioChatApi.open();
      }
    }
  });
})();
