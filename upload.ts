import { Workspace, StructurizrClient } from "structurizr-typescript"
import { readFileSync } from 'fs';

type ApiConfig = typeof import('./api.json');

import yaml from 'yaml';

const mkClient = (api: ApiConfig): StructurizrClient => {
  if (api.custom_url !== undefined && api.custom_url.length > 0) {
    return new StructurizrClient(api.api_key, api.api_secret, api.custom_url);
  }
  return new StructurizrClient(api.api_key, api.api_secret);
}

const pushWorkspace = (api: ApiConfig, workspace: Workspace) => {
  const client = mkClient(api);
  return client.putWorkspace(api.workspace_id, workspace);
}

export async function uploadWorkspaceFromFile(cfgFileName: string, yamlFileName: string) {
  const workspace = new Workspace("name", "description");
  const yamlFile = readFileSync(yamlFileName, { encoding: 'utf-8' });
  const cfgFile = readFileSync(cfgFileName, { encoding: 'utf-8' });
  const workspaceDTO = yaml.parse(yamlFile);
  const api = JSON.parse(cfgFile) as ApiConfig;
  workspace.fromDto(workspaceDTO);
  const response = await pushWorkspace(api, workspace);
  if (response) {
    console.log(response);
  }
}