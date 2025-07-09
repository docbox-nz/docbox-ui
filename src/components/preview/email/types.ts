/**
 * Type expected of an email document metadata stored in docbox
 */
export interface EmailMetadataDocument {
  from: EmailEntity;
  to: EmailEntity[];
  cc: EmailEntity[];
  bcc: EmailEntity[];
  subject?: string | null;
  date?: string | null;
  message_id?: string | null;
  headers: EmailHeader[];
  attachments: EmailAttachment[];
}

export interface EmailEntity {
  name?: string | null;
  address?: string | null;
}

export interface EmailAttachment {
  file_id: string;
  name: string;
  length: number;
  mime: string;
}

export interface EmailHeader {
  name: string;
  value: string;
}
