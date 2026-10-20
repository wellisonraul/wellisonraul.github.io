---
title: Microservices performance forecast using dynamic Multiple Predictor Systems

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Wellison R. M. Santos
- Adalberto R. Sampaio Jr.
- Nelson S. Rosa
- George D. C. Cavalcanti

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2024-01-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2026-10-20T17:42:24.934209Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- article-journal

# Publication name and optional abbreviated publication name.
publication: '*Engineering Applications of Artificial Intelligence*'
publication_short: ''

doi: https://doi.org/10.1016/j.engappai.2023.107649

abstract: 'Time series forecasting has been applied to predict performance degradation
  in Microservice-Based Applications (MBAs). The prediction enables MBA adaptation
  to avoid performance degradation and maintain the customer experience. The approaches
  in the literature commonly perform the forecast using a single monolithic model.
  However, since no model is better than others for all possible scenarios, using
  only one increases the risk of inaccurate estimates. Thus, an alternative for improving
  the accuracy and robustness of the performance degradation of MBAs is to adopt an
  ensemble, i.e., a Multiple Predictor Systems (MPS). This paper proposes an MPS methodology
  that selects and combines the most suitable models to forecast test patterns from
  a pool of models. Experiments were carried out with 32 time series containing performance
  metrics commonly used for MBA adaptation. Different scenarios concerning the pool
  (homogeneous or heterogeneous) and the selection phase (static or dynamic) are considered.
  Likewise, six widely used models in the literature were employed for pool generation:
  ARIMA, Multilayer Perceptron, Support Vector Regression, Random Forest, Long Short-Term
  Memory, and eXtreme Gradient Boosting. The evaluation shows that the proposed solution
  maintains or improves the forecast accuracy on 26 out of 32 datasets (81.25%) compared
  to monolithic models. In particular, the homogeneous pool and the dynamic selection
  of predictors obtained very satisfactory results. Therefore, MPS provide more accurate
  decision-making for MBA interventions, avoiding incorrect adjustments that could
  degrade the customer experience. Source code, figures, and data sets are publicly
  available at https://github.com/gfads/mps-methodology.'

# Summary. An optional shortened abstract.
summary: ''

tags:
- Ensemble learning
- Time series forecasting
- Dynamic selection
- Static combination
- Microservices

# Display this page in a list of Featured pages?
featured: false

# Links
url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

# Publication image
# Add an image named `featured.jpg/png` to your page's folder then add a caption below.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects: ['internal-project']` links to `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []
links:
- name: URL
  url: https://www.sciencedirect.com/science/article/pii/S095219762301833X
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
