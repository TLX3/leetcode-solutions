let killProcess = (pid, ppid, kill) => {
  let map = new Map();
  for (let i = 0; i < ppid.length; i++) {
    let children = map.get(ppid[i]);
    if (children) {
      children.push(pid[i]);
    } else {
      map.set(ppid[i], [pid[i]]);
    }
  }
  let queue = [kill];
  let i = 0;
  while (i < queue.length) {
    let children = map.get(queue[i]);
    if (children) queue.push(...children);
    i++;
  }
  return queue;
}