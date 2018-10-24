let killProcess = (pid, ppid, kill) => {
  let killed = [kill];
  let pidToChildren = {};
  for (let i = 0; i < ppid.length; i++) {
    let parentId = ppid[i];
    if (pidToChildren[parentId]) pidToChildren[parentId].push(pid[i]);
    else pidToChildren[parentId] = [pid[i]];
  }
  let i = 0;
  while (i < killed.length) {
    let currentId = killed[i];
    let children = pidToChildren[currentId];
    if (children) killed.push(...children);
    i++;
  }
  return killed;
}