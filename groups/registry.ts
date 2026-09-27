// The list of all group screens shown on the home screen.
// TEACHER ONLY – students change their title/emoji via `meta` in their own file.
//
// To add a group: copy groups/group7 to groups/group8, then add one import
// and one entry below.
import type { ComponentType } from 'react';

import * as group1 from './group1';
import * as group2 from './group2';
import * as group3 from './group3';
import * as group4 from './group4';
import * as group5 from './group5';
import * as group6 from './group6';
import * as group7 from './group7';

export type GroupEntry = {
  id: string;
  title: string;
  emoji: string;
  color: string;
  component: ComponentType;
};

type GroupModule = {
  default: ComponentType;
  meta?: { title?: string; emoji?: string };
};

// A group's own `meta` wins over the defaults given here.
function group(id: string, mod: GroupModule, emoji: string, color: string): GroupEntry {
  return {
    id,
    title: mod.meta?.title || `Group ${id.replace('group', '')}`,
    emoji: mod.meta?.emoji || emoji,
    color,
    component: mod.default,
  };
}

export const groups: GroupEntry[] = [
  group('group1', group1, '🐸', '#86efac'),
  group('group2', group2, '🦄', '#f9a8d4'),
  group('group3', group3, '🚀', '#93c5fd'),
  group('group4', group4, '🌮', '#fdba74'),
  group('group5', group5, '👾', '#c4b5fd'),
  group('group6', group6, '🍩', '#fde047'),
  group('group7', group7, '🐙', '#5eead4'),
];

export function findGroup(id: string | undefined): GroupEntry | undefined {
  return groups.find((g) => g.id === id);
}
