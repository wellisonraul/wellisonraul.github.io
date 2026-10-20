---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2022-10-24
type: landing

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: me
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Use the new Gradient Mesh which automatically adapts to the selected theme colors
      background:
        gradient_mesh:
          enable: true

      # Name heading sizing to accommodate long or short names
      name:
        size: md # Options: xs, sm, md, lg (default), xl

      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded

  - block: resume-experience
    id: experience
    content:
      username: me
    design:
      date_format: 'Jan 2006'
      is_education_first: true
  
  - block: collection
    id: research
    content:
      title: Research
      text: ''
      count: 0
      filters:
        folders:
          - publications
        exclude_featured: true
      archive:
        enable: false
    design:
      view: citation


  - block: comparison-table
    id: students
    content:
      title: Current Students
      competitors:
        - name: Degree
        - name: Role
        - name: Since
      rows:
        - feature: Ailton da Silva Cordeiro
          note: 'CESAR School'
          values: ["PhD", "Advisor", "2026"]

        - feature: Damião de Oliveira Melo Neto
          note: 'CESAR School'
          values: ["PhD", "Advisor", "2026"]

        - feature: Luis Eduardo Tenório Silva
          note: 'UFPE' 
          values: ["PhD", "Co-advisor", "2026"]

        - feature: Adriano Novais Morais
          note: 'CESAR School' 
          values: ["PhD", "Advisor", "2025"]

        - feature: Matheus Vilarim Pereira dos Santos
          note: 'CESAR School'
          values: ["PhD", "Advisor", "2025"]
          

        - feature: Igor Fugagnoli Baptista do Rêgo
          note: 'CESAR School'
          values: ["MSc", "Advisor", "2026"]

        - feature: Eduardo Silva dos Santos
          note: 'CESAR School'
          values: ["MSc", "Advisor", "2026"]

        - feature: José Edson Carneiro Agra Júnior
          note: 'CESAR School'
          values: ["MSc", "Advisor", "2025"]
          

        - feature: Geilson Nascimento Silva
          note: 'CESAR School'
          values: ["MSc", "Co-advisor", "2024"]

        - feature: Pedro Henrique Guimarães Liberal
          note: 'CESAR School'
          values: ["BSc", "Advisor", "2025"]
    design:
      row_striping: true
      spacing:
        padding: ["32px", "0", "0", "0"]
        margin: [0, 0, 0, 0]

  - block: comparison-table
    id: former-students
    content:
      title: Former Students
      competitors:
        - name: Degree
        - name: Role
        - name: Completed
        - name: Subsequent position
      rows:
        - feature: Gabriel Valença Carvalho
          note: 'CESAR School'
          values:
            - MSc
            - Co-advisor
            - Oct 2026
            - "UX/UI Designer @ CESAR"

        - feature: João Ricardo Leitão Barros
          note: 'CESAR School'
          values:
            - "BSc"
            - Co-advisor
            - Dec 2025
            - "Software Engineer @ Tron Soluções"
    design:
      row_striping: true
      spacing:
        padding: ["0", "0", "0", "0"]
        margin: [0, 0, 30, 0]


  - block: map
    id: contact
    content:
      title: Contact
      subtitle: We are located at CEAGRI II, Universidade Federal Rural de Pernambuco (UFRPE), in Recife, Brazil. Please contact us to arrange a visit.
      location:
        address: "CEAGRI II, Praça Farias Neves, 2 - Dois Irmãos, Recife - PE, 52171-900"
        lat: -8.0176682
        lng: -34.9445171
      zoom: 15
      cta:
        directions:
          text: Get directions
        phone: "+55 81 3320-5440"
        email: wellison.santos@ufrpe.br
    design:
      layout: side-by-side
      height: md
      style: streets
---
