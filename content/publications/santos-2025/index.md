---
title: 'Univariate vs multivariate prediction for containerised applications auto-scaling:
  a comparative study'

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Wellison R. M. Santos
- Adalberto R. Sampaio
- Nelson S. Rosa
- George D. C. Cavalcanti

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2025-01-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2026-10-20T17:42:24.940996Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- paper-conference

# Publication name and optional abbreviated publication name.
publication: '*Proceedings of the 40th ACM/SIGAPP Symposium on Applied Computing*'
publication_short: ''

doi: 10.1145/3672608.3707770

abstract: Adaptive containerised systems have been developed using the Time Series
  Forecasting (TSF) technique. TSF analyses historical data patterns to estimate future
  trends, assuming they will occur again. Identifying future trends allows anticipating
  problems (e.g., high latency) and acting (e.g., replicating the service) to fix
  them before they occur. Depending on the number of features (i.e., metrics) used
  as input for prediction, TSF can be classified as univariate (single feature) or
  multivariate (two or more features). Despite the popularity of both TSF strategies,
  a unique strategy is typically implemented, and there is no comparison with the
  other. However, it is known that no strategy is the best choice for all possible
  scenarios. This paper presents a comparative study assessing univariate and multivariate
  proactive auto-scaling of containerised applications. A custom-made multivariate
  auto-scaling tool called Multivariate Forecasting Tool (MFT) was developed and compared
  with a production-grade univariate system called Predict Kube (PK). Both applications
  were evaluated using four popular open-source benchmark applications. The results
  show that the multivariate strategy decreased the response time of the evaluated
  applications in 75% of the experiments (i.e., 9 out of 12) compared to the univariate,
  and it was more cost-effective in half of them (i.e., 6 out of 12). Furthermore,
  they also indicate that the multivariate strategy efficiency is more significant
  as the number of containers composing the application increases. This comparative
  study is expected to be a helpful guide for developers who want to choose the most
  effective proactive approach for their auto-scaling solutions.

# Summary. An optional shortened abstract.
summary: ''

tags:
- time series forecasting
- univariate forecasting
- multivariate forecasting
- deep learning
- proactive auto-scaling

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
  url: https://doi.org/10.1145/3672608.3707770
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
