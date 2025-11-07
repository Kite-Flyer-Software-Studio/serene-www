'use client';

import { Container } from '@/components/ui/container';
import { TitleBadge } from '@/components/ui/title-badge';
import { SubHeading } from '@/components/ui/sub-heading';
import { SectionHeading } from '@/components/ui/section-heading';

import { Card, CardDescription, CardTitle } from './Card';
import {
  BrainIcon,
  FingerprintIcon,
  MouseBoxIcon,
  NativeIcon,
  RealtimeSyncIcon,
  SDKIcon,
} from './Icons';

import {
  LLMModelSelectorSkeleton,
  NativeToolsIntegrationSkeleton,
  TextToWorkflowBuilderSkeleton,
} from './Skeletons';

export const Features = () => {
  return (
    <Container className="border-divide border-x" id="features">
      <div className="flex flex-col items-center py-16">
        <TitleBadge text="Why Serene Works" />
        <SectionHeading className="mt-4">Designed for Real Life</SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg px-2">
          Thoughtful tools for meaningful connections.
        </SubHeading>
        <div className="border-divide divide-divide mt-16 grid grid-cols-1 divide-y border-y md:grid-cols-2 md:divide-x">
          <Card className="overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <BrainIcon />
              <CardTitle>Intentional matching</CardTitle>
            </div>
            <CardDescription>
              Matches by intentions, interests, routines, and conversational
              style. We believe in the power of a single, meaningful connection.
              Our one-match-per-week model encourages depth and presence.
            </CardDescription>
            <LLMModelSelectorSkeleton />
          </Card>
          <Card className="overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <MouseBoxIcon />
              <CardTitle>
                Meet Serene, your dedicated Social Concierge
              </CardTitle>
            </div>
            <CardDescription>
              Your wingman in your pocket. Handles the "where and when,"
              suggests conversation starters based on your common interests, and
              removes all the awkward planning.
            </CardDescription>
            <TextToWorkflowBuilderSkeleton />
          </Card>
        </div>
        <div className="w-full">
          <Card className="relative w-full max-w-none overflow-hidden">
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px]"></div>
            <div className="flex items-center gap-2">
              <NativeIcon />
              <CardTitle>One Perfect Match Per Week</CardTitle>
            </div>
            <CardDescription>
              Quality over quantity. Every Thursday, you tell Serene who you
              want to meet. No overwhelm. We focus on one high-potential
              connection, encouraging you to be present and intentional.
            </CardDescription>
            <NativeToolsIntegrationSkeleton />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-2">
              <FingerprintIcon />
              <CardTitle>Serene Coffee & Wine Perks</CardTitle>
            </div>
            <CardDescription>
              Our physical space, Serene Coffee & Wine, is a testament to our
              philosophy—a quiet, refined environment where connection can
              flourish without distraction. Meetups get venue credits, quiet
              corners, and easy booking.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <RealtimeSyncIcon />
              <CardTitle>Curated group socials</CardTitle>
            </div>
            <CardDescription>
              2–5 people, curated for chemistry.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <SDKIcon />
              <CardTitle>Custom Connector SDK</CardTitle>
            </div>
            <CardDescription>
              Run agent workflows in a sandbox to preview behavior, debug logic,
              and test interactions
            </CardDescription>
          </Card>
        </div>
      </div>
    </Container>
  );
};
