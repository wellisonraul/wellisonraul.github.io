---
title: Improving power consumption in IoT devices through neural network-based decision
  making

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Vladimir G. Da Silva
- Nelson S. Rosa
- Fernando Aires
- Wellison R. M. Santos

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2026-01-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2026-10-20T17:42:24.960076Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- article-journal

# Publication name and optional abbreviated publication name.
publication: '*Internet of Things*'
publication_short: ''

doi: https://doi.org/10.1016/j.iot.2025.101827

abstract: Advances in the Internet of Things (IoT) have led to several challenges
  across domains, creating opportunities for new solutions. The large volume of data
  and high processing demands of IoT applications, typically handled by cloud providers,
  make this approach costly regarding storage, computation, and latency. This fact
  has led to the emergence of the fog computing paradigm that enables the integrated
  use of edge and cloud resources. In this new scenario, one of the main challenges
  is managing containerised IoT applications that may migrate from fog nodes (IoT
  Devices) to the cloud and vice versa. This management is needed to preserve system
  performance and user experience while considering cloud resource costs. The container
  migration becomes especially critical for battery-powered devices, whose energy
  autonomy is a significant concern. Existing solutions do not consider power consumption
  and the cost of fog-cloud settings in the migration process. This paper proposes
  IRAS-IoT (Intelligent Replacement as a Service for IoT), a solution for autonomously
  migrating containers between fog nodes and the cloud. Based on MAPE-K, IRAS-IoT
  adopts a Multilayer Perceptron (MLP) neural network model to decide on migrating
  containers and optimising workload distribution according to devices’ power consumption.
  Regarding cost optimisation, in scenarios where fog nodes become overloaded, the
  solution may also allocate containers to a cloud provider, selecting the most cost-effective
  option. Experimental results show that IRAS-IoT reduces energy consumption by up
  to 18% and extends battery life by 34%, and lowers cloud operational costs compared
  to the baseline scenario.

# Summary. An optional shortened abstract.
summary: ''

tags:
- IoT
- Container
- Self-adaptation
- Neural network
- Power consumption

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
  url: https://www.sciencedirect.com/science/article/pii/S2542660525003415
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
