---
title: Local workflow
sidebar:
  order: 1
schemaVersion: treeseed.knowledge-page/v2
id: fixture.developer.workflow.local-workflow
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
slug: workflow/local-workflow
summary: The shortest loop for making and verifying a TreeSeed change.
status: published
visibility: public
order: 40
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

The normal local loop is:

1. install dependencies
2. run package verification
3. inspect the fixture for the surface you changed
4. tighten tests or docs if the change affects contributor understanding
