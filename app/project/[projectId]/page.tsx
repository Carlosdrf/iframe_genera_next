import React from "react";

const baseUrl =
  "https://lookerstudio.google.com/embed/reporting/d9700366-d5d8-4a8c-8b4a-9bc62a3b2a9b/page/uU4kF";

const buildLookerUrl = (projectId: string) => {
  const params: Record<string, string> = {};

  if (projectId) params["ds0.projectid"] = projectId;
  const encodedParam = encodeURIComponent(JSON.stringify(params));
  return `${baseUrl}?params=${encodedParam}`;
};

export default async function Project({ params }) {
  const { projectId } = await params;

  const loadFrame = Boolean(projectId);
  const url = buildLookerUrl(projectId);

  return (
    <>
      <section className="min-h-screen container flex flex-col mx-auto">
        <h1 className="text-white py-4 text-2xl">Genera metrics demo</h1>
        {loadFrame && (
          <iframe
            className="h-full flex-1"
            width="100%"
            height="100%"
            src={url}
            style={{ border: 0 }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        )}
      </section>
    </>
  );
}
