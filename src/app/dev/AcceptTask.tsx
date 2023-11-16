import React from "react";
import { RequestResponseDisplayProps } from "./page";

export default function AcceptTask({
  setRequest,
  setResponse,
  setResponseStatus,
}: RequestResponseDisplayProps) {
  const [taskId, setTaskId] = React.useState("");

  async function fetchAcceptanceAPI(event: React.FormEvent, method: string) {
    event.preventDefault();
    const requestBody = JSON.stringify({
      id: taskId,
    });
    setRequest(requestBody);

    const response = await fetch("/api/accept/", {
      method: method,
      body: requestBody,
    });
    const json = await response.json();
    setResponse(JSON.stringify(json));
    setResponseStatus(response.status.toString());
  }

  return (
    <>
      <form
        onSubmit={(event) => fetchAcceptanceAPI(event, "POST")}
        className="flex-col flex m-2 p-1"
      >
        <label htmlFor="task-id-accept-post">Task ID</label>
        <input
          id="task-id-accept-post"
          value={taskId}
          type="number"
          required={true}
          onChange={(event) => setTaskId(event.target.value)}
        />
        <button className="outline">/api/accept POST</button>
      </form>

      <form
        onSubmit={(event) => fetchAcceptanceAPI(event, "DELETE")}
        className="flex-col flex m-2 p-1"
      >
        <button className="outline">/api/accept DELETE</button>
      </form>
    </>
  );
}