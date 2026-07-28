<script setup>
  // 贡献者列表（模板示例）——新项目请替换为实际成员。
  import { VPTeamMembers } from 'vitepress/theme';

  const contributors = [
    {
      avatar: 'https://www.github.com/atomeocean.png',
      name: 'Your Name',
      title: 'Developer',
      links: [{ icon: 'github', link: 'https://github.com/atomeocean' }]
    }
  ];
</script>

<h2 :class="$style.title">Contributors</h2>

<VPTeamMembers :class="$style.members" size="medium" :members="contributors" />

<style module>
  .title {
    margin: 0 auto;
    font-size: 2em;
    font-weight: bold;
    padding: 24px 64px;
    color: var(--vp-c-text-1);
  }

  .members {
    padding: 0 64px;
  }
</style>
