---
title: Verification loop
sidebar:
  order: 1
schemaVersion: treeseed.knowledge-page/v1
id: fixture.developer.verification.verification-loop
bookId: fixture-book-developer
slug: verification/verification-loop
summary: How the fixture participates in the package verification chain.
status: published
visibility: public
order: 30
groupIds: []
contributors: []
relatedBookIds: []
relatedKnowledgeIds: []
relatedNoteIds: []
relatedQuestionIds: []
relatedObjectiveIds: []
relatedProposalIds: []
relatedDecisionIds: []
capabilityIds: []
routePatterns: []
resourceTypes:
  - fixture-knowledge
actionIds: []
keywords: []
documentationUrls: []
---

The fixture is part of verification, not an optional demo. `check`, `build`, and smoke validation all depend on it staying coherent. If a change breaks the fixture, that is usually a package usability signal, not just a content problem.
