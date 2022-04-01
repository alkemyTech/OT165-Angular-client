export interface Message {
  type: 'success' | 'error' | 'warning';
  title?: string;
  detail?: string;
  life?: number;
}