import { ref, type InjectionKey, type Component, type Ref } from 'vue';
import { mergeDeepRight } from 'rambda';
import { GUID } from '@/util/guid';
export type DialogWrapper = {
  component: Component;
  inputs: Record<string, any>;
  id: string;
  options?: DialogOptions;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
  element?: HTMLElement | undefined;
};
export type DialogOptions = {
  closeOnOutsideClick: boolean;
  closeOnEscape: boolean;
};
const dialogs = ref<DialogWrapper[]>([]);

function openDialog(options: {
  component: Component;
  id?: string;
  inputs: Record<string, any>;
  options: {
    closeOnOutsideClick: true;
    closeOnEscape: true;
  };
}) {
  const id = options.id ?? GUID();
  const dialogOptions = mergeDeepRight(
    {
      closeOnOutsideClick: true,
      closeOnEscape: true,
    },
    options.options ?? {},
  );
  return new Promise((resolve, reject) => {
    const dialog: DialogWrapper = {
      component: options.component,
      inputs: mergeDeepRight({ id: id, dialogOptions }, options.inputs ?? {}),
      id: id,
      reject,
      resolve,
    };
    dialogs.value = [...dialogs.value, dialog];
  });
}

function cancelDialog(identifier: DialogWrapper | string) {
  const id = typeof identifier === 'string' ? identifier : identifier.id;
  const dialog = dialogs.value.find((dialog) => dialog.id === id);
  if (dialog) {
    dialog.reject();
    closeDialog(dialog);
  }
}

function submitDialog(identifier: DialogWrapper | string, data: any) {
  const id = typeof identifier === 'string' ? identifier : identifier.id;
  const dialog = dialogs.value.find((dialog) => dialog.id === id);
  if (dialog) {
    dialog.resolve(data);
    closeDialog(dialog);
  }
}

function closeDialog(dialogToClose: DialogWrapper) {
  if (dialogToClose.element) {
    dialogToClose.element.style.transition = 'opacity 0.3s, scale 0.3s';
    dialogToClose.element.style.opacity = '0';
    dialogToClose.element.style.transform = `${dialogToClose.element.style.transform ?? ''} scale(0)`;
  }
  // setTimeout(() => {
  //   dialogs.value = dialogs.value.filter(
  //     (dialog) => dialog.id !== dialogToClose.id,
  //   );
  // }, 300);
}

// Expose the openDialog function for use in other components
type DialogService = {
  openDialog: typeof openDialog;
  cancelDialog: (identifier: DialogWrapper | string) => void;
  submitDialog: (identifier: DialogWrapper | string, data: any) => void;
  dialogs: Ref<DialogWrapper[]>;
};
export const DialogService: InjectionKey<DialogService> =
  Symbol('DialogService');
export default {
  openDialog: openDialog,
  cancelDialog: cancelDialog,
  submitDialog: submitDialog,
  dialogs: dialogs,
};
