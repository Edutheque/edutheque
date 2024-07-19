import { type GitLabProject, type Resource, LEVELS, SUBJECTS, type Tag } from "~/models";

export const convertToResource = (project: GitLabProject): Resource => {
    const tags: Tag[] = project.tag_list

    return {
        title: project.name,
        description: project.description,
        lastUpdated: new Date(project.last_activity_at),
        author: project.namespace.name,
        link: project.web_url,
        tags,
    };
};