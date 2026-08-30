/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ThemeColor = 'gold' | 'emerald' | 'blue' | 'crimson';

export interface TeamSettings {
  teamName: string;
  shortName: string;
  crestIndex: number;
  themeColor: ThemeColor;
  athleteImageIndex: number;
  opponentName: string;
  opponentCrestIndex: number;
  opponentScore: number;
  teamScore: number;
}

export interface Player {
  name: string;
  number: number;
  position: 'GK' | 'DEF' | 'MID' | 'ATT';
  x: number; // percentage width
  y: number; // percentage height
}

export interface TableRow {
  pos: number;
  team: string;
  points: number;
  played: number;
  wins: number;
  drawn: number;
  lost: number;
  goals: string;
}
