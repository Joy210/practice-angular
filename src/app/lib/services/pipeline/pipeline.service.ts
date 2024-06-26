import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PipelineService {
  protected pipelines: any[] = [
    {
      key: 'acquisition',
      name: 'Acquisition',
      deals: [
        {
          name: 'Acquisition of Oakwood & Bartenhollow',
          assignee: 'Rafi',
          dueDate: '2024-02-10',
          assetType: 'Commercial',
          investmentProfile: 'Growth',
          location: 'Los Angeles, CA',
          nra: 50000,
          acres: 2.5,
          rsf: 10000,
          purchasePrice: 12000000,
          inPlaceNoi: 500000,
          stage: 'Under Contract && DD Waived',
        },
        {
          name: 'Merger of Sunset Plaza',
          assignee: 'Rafi',
          dueDate: '2024-05-15',
          assetType: 'Residential',
          investmentProfile: 'Income',
          location: 'San Francisco, CA',
          nra: 75000,
          acres: 1.7,
          rsf: 15000,
          purchasePrice: 18000000,
          inPlaceNoi: 750000,
          stage: 'Under Contract && DD Waived',
        },
        {
          name: 'Acquisition of Oakwood & Bartenhollow',
          assignee: 'Shafayat',
          dueDate: '2024-02-10',
          assetType: 'Commercial',
          investmentProfile: 'Growth',
          location: 'Los Angeles, CA',
          nra: 50000,
          acres: 2.5,
          rsf: 10000,
          purchasePrice: 12000000,
          inPlaceNoi: 500000,
          stage: 'DD Pending',
        },
        {
          name: 'Merger of Sunset Plaza',
          assignee: 'Joy',
          dueDate: '2024-05-15',
          assetType: 'Residential',
          investmentProfile: 'Income',
          location: 'San Francisco, CA',
          nra: 75000,
          acres: 1.7,
          rsf: 15000,
          purchasePrice: 18000000,
          inPlaceNoi: 750000,
          stage: 'Early Stage',
        },
        {
          name: 'Development of Riverbend Estates',
          assignee: 'Shafayat',
          dueDate: '2024-09-30',
          assetType: 'Land',
          investmentProfile: 'Speculative',
          location: 'Austin, TX',
          nra: 30000,
          acres: 3.2,
          rsf: 5000,
          purchasePrice: 3000000,
          inPlaceNoi: 200000,
          stage: 'Early Stage',
        },
      ],
    },
    {
      key: 'development',
      name: 'Development',
      deals: [
        {
          name: 'Acquisition of Oakwood & Bartenhollow',
          assignee: 'Rafi',
          dueDate: '2024-02-10',
          assetType: 'Commercial',
          investmentProfile: 'Growth',
          location: 'Los Angeles, CA',
          nra: 50000,
          acres: 2.5,
          rsf: 10000,
          purchasePrice: 12000000,
          inPlaceNoi: 500000,
          stage: 'Under Contract && DD Waived',
        },
        {
          name: 'Merger of Sunset Plaza',
          assignee: 'Rafi',
          dueDate: '2024-05-15',
          assetType: 'Residential',
          investmentProfile: 'Income',
          location: 'San Francisco, CA',
          nra: 75000,
          acres: 1.7,
          rsf: 15000,
          purchasePrice: 18000000,
          inPlaceNoi: 750000,
          stage: 'Under Contract && DD Waived',
        },
        {
          name: 'Development of Riverbend Estates',
          assignee: 'Shafayat',
          dueDate: '2024-09-30',
          assetType: 'Land',
          investmentProfile: 'Speculative',
          location: 'Austin, TX',
          nra: 30000,
          acres: 3.2,
          rsf: 5000,
          purchasePrice: 3000000,
          inPlaceNoi: 200000,
          stage: 'Early Stage',
        },
      ],
    },
  ];

  protected stages: any[] = [
    {
      name: 'Under Contract && DD Waived',
      deals: [
        {
          name: 'Acquisition of Oakwood & Bartenhollow',
          assignee: 'Joy',
          dueDate: '2024-02-10',
          assetType: 'Commercial',
          investmentProfile: 'Growth',
          location: 'Los Angeles, CA',
          nra: 50000,
          acres: 2.5,
          rsf: 10000,
          purchasePrice: 12000000,
          inPlaceNoi: 500000,
          stage: 'Under Contract && DD Waived',
        },
        {
          name: 'Merger of Sunset Plaza',
          assignee: 'Jeremy',
          dueDate: '2024-05-15',
          assetType: 'Residential',
          investmentProfile: 'Income',
          location: 'San Francisco, CA',
          nra: 75000,
          acres: 1.7,
          rsf: 15000,
          purchasePrice: 18000000,
          inPlaceNoi: 750000,
          stage: 'Under Contract && DD Waived',
        },
      ],
    },
    { name: 'DD Pending', deals: [] },
    { name: 'In Negotiation', deals: [] },
    { name: 'LOI Submitted', deals: [] },
    { name: 'Early Stage', deals: [] },
  ];
}
