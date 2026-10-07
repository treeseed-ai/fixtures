---
title: Verification loop
sidebar:
  order: 1
schemaVersion: treeseed.knowledge-page/v2
id: fixture.developer.verification.verification-loop
projectId: fixture-site
bookRef:
  store: treedx
  model: book
  id: fixture-book-developer
  revision: 1
  digest: sha256:3435d7da71eec57bde980852da3042b7e25b6cbf7cc961e9882dd9d52f326335
  repository: fixture-library
  commit: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  path: books/developer.mdx
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
