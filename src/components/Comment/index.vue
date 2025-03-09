<template>
  <div>
    <h1>Comments Section</h1>
    <!-- Pass the comments array to CommentList -->
    <CommentList :comments="comments" />
  </div>
</template>

<script>
  import CommentList from "./List/index.vue"; // Import the CommentList component
  export default {
    name: "CommentComponent",
    components: {
      CommentList,
    },
    data() {
      return {
        comments: [
          {
            id: "1",
            user: {
              username: "john_doe",
              id: "123",
            },
            comment:
              "<p>This is a <strong>bold</strong> comment and <em>italic</em> content.</p>",
            date: "2025-01-12T10:00:00Z",
            replied: [
              {
                id: "2",
                user: {
                  username: "jane_smith",
                  id: "124",
                },
                comment:
                  "<p>Great comment! I agree with your points on <em>italic</em> style.</p>",
                date: "2025-01-12T10:01:00Z",
                replied: [
                  {
                    id: "3",
                    user: {
                      username: "john_doe",
                      id: "123",
                    },
                    comment:
                      "<p>Thanks for the feedback, <strong>Jane</strong>!</p>",
                    date: "2025-01-12T10:02:00Z",
                    replied: [
                      {
                        id: "3",
                        user: {
                          username: "john_doe",
                          id: "123",
                        },
                        comment:
                          "<p>Thanks for the feedback, <strong>Jane</strong>!</p>",
                        date: "2025-01-12T10:02:00Z",
                        replied: [],
                      },
                      {
                        id: "3",
                        user: {
                          username: "john_doe",
                          id: "123",
                        },
                        comment:
                          "<p>Thanks for the feedback, <strong>Jane</strong>!</p>",
                        date: "2025-01-12T10:02:00Z",
                        replied: [
                          {
                            id: "3",
                            user: {
                              username: "john_doe",
                              id: "123",
                            },
                            comment:
                              "<p>Thanks for the feedback, <strong>Jane</strong>!</p>",
                            date: "2025-01-12T10:02:00Z",
                            replied: [],
                          },
                          {
                            id: "3",
                            user: {
                              username: "john_doe",
                              id: "123",
                            },
                            comment:
                              "<p>Thanks for the feedback, <strong>Jane</strong>!</p>",
                            date: "2025-01-12T10:02:00Z",
                            replied: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "4",
            user: {
              username: "alice_williams",
              id: "126",
            },
            comment:
              "<p>Thank you for sharing your ideas on <em>italic</em> formatting in content!</p>",
            date: "2025-01-12T10:05:00Z",
            replied: [],
          },
        ],
      };
    },
  };
</script>
