/* global Api */

import FileTemplateSelector from '../file_template_selector';

export default class BlobCiYamlSelector extends FileTemplateSelector {
  constructor({ mediator }) {
    super(mediator);
    this.config = {
      key: 'gitlab-ci-yaml',
      name: '.gitlab-ci.yml',
      pattern: /(.gitlab-ci.yml)/,
      endpoint: Api.gitlabCiYml,
      dropdown: '.js-gitlab-ci-yml-selector',
      wrapper: '.js-gitlab-ci-yml-selector-wrap',
    };
  }

  initDropdown() {
    // maybe move to super class as well
    this.$dropdown.glDropdown({
      data: this.$dropdown.data('data'),
      filterable: true,
      selectable: true,
      toggleLabel: item => item.name,
      search: {
        fields: ['name'],
      },
      clicked: (query, el, e) => this.reportSelection(query.name, el, e),
      text: item => item.name,
    });
  }
}
