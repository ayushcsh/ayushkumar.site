import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";

export default defineConfig({
  name: "ayushkumar",
  title: "ayushkumar.site",
  basePath: "/studio",
  projectId: "zk80rbw5",
  dataset: "portfolio",
  plugins: [deskTool(), visionTool(), codeInput(), table()],
  schema: { types: schemaTypes },
});
