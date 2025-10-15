---
title: 'Univariate vs multivariate prediction for containerised applications auto-scaling:
  a comparative study'
authors:
- Wellison R. M. Santos
- Adalberto R. Sampaio
- Nelson S. Rosa
- George D. C. Cavalcanti
date: '2025-01-01'
publishDate: '2025-10-15T14:26:29.180621Z'
publication_types:
- paper-conference
publication: '*Proceedings of the 40th ACM/SIGAPP Symposium on Applied Computing*'
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
tags:
- time series forecasting
- univariate forecasting
- multivariate forecasting
- deep learning
- proactive auto-scaling
links:
- name: URL
  url: https://doi.org/10.1145/3672608.3707770
---
