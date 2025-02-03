export const updateMonitor = async (args: any, context: any) => {
  return context.entities.Monitor.update({
    where: { id: args.id },
    data: args
  });
} 