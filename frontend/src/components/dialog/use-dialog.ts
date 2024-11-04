import { injectStrict } from '@/util/strict-inject';
import { DialogService } from '@/services/dialog.service';
import { getCurrentInstance } from 'vue';

type DialogProps = {
  id: string;
} & Record<string, any>;
export function useDialog() {
  const dialogService = injectStrict(DialogService);
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error('useDialog must be called within a component.');
  }
  const props = instance.props as DialogProps;

  if (!props.id) {
    throw new Error('Dialog component must have an id prop.');
  }

  function submit(data?: any) {
    console.log('Submitting', props);
    dialogService.submitDialog(props.id, data);
  }

  function cancel(reason?: any) {
    dialogService.cancelDialog(props.id, reason);
  }

  return {
    submit,
    cancel,
  };
}
