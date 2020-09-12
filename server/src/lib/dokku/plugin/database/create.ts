import { NodeSSH } from 'node-ssh';

export const create = async (
  ssh: NodeSSH,
  name: string,
  databaseType: string
) => {
  const resultDatabaseCreate = await ssh.execCommand(
    `${databaseType}:create ${name}`
  );
  if (resultDatabaseCreate.code === 1) {
    console.error(resultDatabaseCreate);
    throw new Error(resultDatabaseCreate.stderr);
  }
};
