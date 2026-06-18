import { requestToasterMount, ensureToasterReady } from "@/components/shared/DeferredToaster";

type SonnerModule = typeof import("sonner");

let sonnerModule: SonnerModule | null = null;

async function getSonner() {
  requestToasterMount();
  await ensureToasterReady();

  if (!sonnerModule) {
    sonnerModule = await import("sonner");
  }

  return sonnerModule;
}

export async function toastError(message: string) {
  const { toast } = await getSonner();
  toast.error(message);
}

export async function toastSuccess(message: string) {
  const { toast } = await getSonner();
  toast.success(message);
}
