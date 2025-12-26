import Schema = GoogleAppsScript.Gmail.Schema;

export function* threads_list(q: string): Generator<Schema.Thread, void, void> {
  let pageToken: string | undefined = undefined;

  while (true) {
    const response: Schema.ListThreadsResponse = Gmail!.Users.Threads.list(
      "me",
      {
        q,
        pageToken,
      },
    );

    if (response.threads) {
      for (const taskList of response.threads) {
        yield taskList;
      }
    }

    if (!response.nextPageToken) {
      break;
    }

    pageToken = response.nextPageToken;
  }
}

export function threads_modify(
  threadId: string,
  request: Schema.ModifyThreadRequest,
): Schema.Thread {
  return Gmail!.Users.Threads.modify(request, "me", threadId);
}
