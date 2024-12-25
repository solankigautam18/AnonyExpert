import { useState } from "react";

const TestApi = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<string | null>(null); // Updated to handle string errors

  const testApi = async () => {
    try {
      const res = await fetch("/api/your-endpoint", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch API");
      }
      setResponse(data);
    } catch (err) {
      // Type check the error using a type guard
      if (err instanceof Error) {
        setError(err.message); // Handle the error as an Error object
      } else {
        setError("An unknown error occurred"); // Fallback for non-Error objects
      }
    }
  };

  return (
    <div>
      <button onClick={testApi}>Test API</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default TestApi;
