export interface PippinStage {
  id: number;
  name: string;
  image: string;
  description: string;
  modalTitle: string;
  fakeStat: string;
  modalDetails: string;
}

export interface XPost {
  id: number;
  title: string;
  url: string;
  description: string;
  type: 'link' | 'video';
  videoSrc?: string;
  videoCaption?: string;
  modalNarration?: string;
}