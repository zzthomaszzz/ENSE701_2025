export class CreateBibtexDto {
  entryType: string;
  citationKey: string;
  entryTags: Record<string, string>;
}