import { IBankStatusColor } from '~/interfaces/bank';
import { enTicketStatus } from '~/interfaces/help';
import { enSalesStatus } from '~/interfaces/sales';
import { enSubscriptionStatus } from '~/interfaces/subscription';
import { enTransferStatus } from '~/interfaces/transfer';

export const getBankStatusColor = (isDark: boolean) => (status: IBankStatusColor['status']) => {
  switch (status) {
    case 'Aprovada':
      return '#009358';
    case 'Avaliando':
      return isDark ? '#9ca8bb' : '#596375';
    case 'Pendente':
      return '#FABB0A';
    case 'Incompleto':
      return '#B0BEC5';
    case 'Cancelado':
      return '#dc3f53';
    default:
      return isDark ? '#FFF4D4' : '#E7AA04';
  }
};

export const getSalesStatusColor = (isDark: boolean) => (status: enSalesStatus) => {
  switch (status) {
    case enSalesStatus['Aberta']:
      return '#2d86ca';
    case enSalesStatus['Em Processamento']:
    case enSalesStatus['Em Análise']:
    case enSalesStatus['Uso Interno']:
    case enSalesStatus['Inadimplente']:
    case enSalesStatus['Recusado']:
    case enSalesStatus['Aguardando Documentacao']:
    case enSalesStatus['Deletado']:
      return '#ba7344';
    case enSalesStatus['Paga']:
      return '#009358';
    case enSalesStatus['Em Recuperacao']:
      return '#E7AA04';
    case enSalesStatus['Agendada']:
    case enSalesStatus['Expirada']:
    case enSalesStatus['Duplicada']:
    case enSalesStatus['Cancelada']:
      return isDark ? '#9ca8bb' : '#596375';
    case enSalesStatus['Aguardando Reembolso']:
    case enSalesStatus['Reembolsado']:
      return '#dc3f53';
    case enSalesStatus['Aguardando Pagamento']:
      return '#e5cf39';
    default:
      return isDark ? '#9ca8bb' : '#596375';
  }
};

export const getTicketStatusColor = (isDark: boolean) => (status: enTicketStatus) => {
  switch (status) {
    case enTicketStatus.Novo:
    case enTicketStatus.Fechado:
      return '#009358';
    case enTicketStatus.Solucionado:
      return '#2d86ca';
    default:
      return isDark ? '#9ca8bb' : '#596375';
  }
};

export const getTransferStatusColor = () => (status: enTransferStatus) => {
  switch (status) {
    case enTransferStatus.Confirmada:
      return '#009358';
    case enTransferStatus.Cancelada:
    case enTransferStatus.Bloqueada:
    case enTransferStatus.Falhou:
      return '#dc3f53';
    default:
      return '#E7AA04';
  }
};

export const getModerationStatusColor = (isDark: boolean) => (status: 'P' | 'A' | 'R' | 'D') => {
  switch (status) {
    case 'P':
      return '#E7AA04';
    case 'A':
      return '#009358';
    case 'R':
      return '#dc3f53';
    case 'D':
      return isDark ? '#545454' : '#D9D5DC';
    default:
      return isDark ? '#9ca8bb' : '#596375';
  }
};

export const getContractStatusColor = (isDark: boolean) => (status: enSubscriptionStatus) => {
  switch (status) {
    case enSubscriptionStatus['Atrasado']:
      return '#fabb0a';
    case enSubscriptionStatus['Aguardando Pagamento']:
      return '#2d86ca';
    case enSubscriptionStatus['Em Dia']:
    case enSubscriptionStatus['Trial']:
      return '#009358';
    case enSubscriptionStatus['Suspenso']:
      return '#dc3f53';
    case enSubscriptionStatus['Cancelado']:
      return '#dc3f53';
    case enSubscriptionStatus['Finalizado']:
      return '#dc3f53';
    default:
      return isDark ? '#9ca8bb' : '#596375';
  }
};

export const getBeltColor = () => (color: 'red' | 'orange' | 'green' | 'black' | 'white' | 'golden') => {
  switch (color) {
    case 'red':
      return '#B61818';
    case 'orange':
      return '#E66023';
    case 'green':
      return '#247B3B';
    case 'black':
      return '#000000';
    case 'golden':
      return '#CE8826';
    default:
      return 'white';
  }
};
