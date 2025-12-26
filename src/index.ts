import * as Gmail from "./gmail";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gmail_markArchivedAsRead() {
  let count = 0;

  const threads = Gmail.threads_list(
    "label:unread -label:inbox has:nouserlabels",
  );

  for (const thread of threads) {
    Gmail.threads_modify(thread.id!, { removeLabelIds: ["UNREAD"] });
    count += 1;
  }

  console.log("Marked %s threads as read", count);
}
