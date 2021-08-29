# BLOG
<div>
    <p v-for="post in $site.pages.filter(p => p.path.includes('/post'))">
        <router-link v-if="post.relativePath !== 'post/README.md'" :to="post.path">{{ post.title }}</router-link>
    </p>
</div>