import { Workspace, StructurizrClient } from "structurizr-typescript"
import { readFileSync, writeFileSync } from 'fs';

type ApiConfig = typeof import('./api.json');

import { stringifySortedById } from './stringify';

const pullWorkspace = (api: ApiConfig): Promise<Workspace> => {

  const client = new StructurizrClient(api.api_key, api.api_secret);
  return client.getWorkspace(api.workspace_id);
}

export async function downloadWorkspaceToFile(cfgFileName: string, yamlFileName: string) {
  const cfgFile = readFileSync(cfgFileName, { encoding: 'utf-8' });
  const api = JSON.parse(cfgFile) as ApiConfig;
  const workspace = await pullWorkspace(api);
  const workspaceDTO = workspace.toDto();
  const yamlString = stringifySortedById(workspaceDTO);
  writeFileSync(yamlFileName, yamlString, { encoding: 'utf-8' });
}
