import type { MessageApiInjection } from "naive-ui/es/message/src/MessageProvider";
import type { NotificationApiInjection } from "naive-ui/es/notification/src/NotificationProvider";
import type { DialogApiInjection } from "naive-ui/es/dialog/src/DialogProvider";
import type { LoadingBarProviderInst } from "naive-ui/es/loading-bar/index";
import type { ModalApiInjection } from "naive-ui/es/modal/src/ModalProvider";

import type { Ref } from "vue";

declare global {
  interface Window {
    $message: MessageApiInjection;
    $notification: NotificationApiInjection;
    $dialog: DialogApiInjection;
    $loadingBar: LoadingBarProviderInst;
    $modal: ModalApiInjection;
    $CustomizeError: (message: string, error?: any) => void;
  }
}
