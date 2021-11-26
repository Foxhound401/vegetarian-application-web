// Public module interface display strings
import LocalizedStrings from "react-localization";

// Home page
export let homeDisplayStrings = new LocalizedStrings({
    en: {
        // Banner section
        homeBannerHeader: "Popular recipes",
        // Shortcuts section
        homeShortcutsHeaderAuthenticated: "What can we help you with?",
        homeShortcutsShareRecipe: "Share with us a recipe",
        homeShortcutsShareVideo: "Share a how-to video",
        homeShortcutsShareBlog: "Write an article or story",
        homeShortcutsSuggestMenu: "Let us suggest this week's menu for you",
        homeShortcutsManagePreferences: "Manage your body index, routines & food preferences",
        homeShortcutsHeaderGuest: "Sign in to get access to more features!",
        homeShortcutsSignIn: "Sign in",
        homeShortcutsSignUp: "Create an account",
        // Recipes section
        homeRecipesHeader: "Our community's latest recipes",
        homeRecipesSeeMore: "See more",
        // Videos section
        homeVideosHeader: "Latest how-to videos",
        homeVideosSeeMore: "See more",
        // Blogs section
        homeBlogsHeader: "Newest stories around",
        homeBlogsSeeMore: "See more",
        // Sidebar
        homeSidebarExplore: "Explore",
        homeSidebarExploreRecipes: "Recipes",
        homeSidebarExploreVideos: "Videos",
        homeSidebarExploreBlogs: "Blogs",
        homeSidebarSearch: "Search",
        homeSidebarSearchUrl: "Advanced search",
        homeSidebarRecommendations: "Try these recipes",
        homeSidebarBlogs: "Popular stories",
    },
    vi: {
        // Banner section
        homeBannerHeader: "Các công thức nấu ăn nổi bật",
        // Shortcuts section
        homeShortcutsHeaderAuthenticated: "Chúng tôi có thể giúp được gì cho bạn?",
        homeShortcutsShareRecipe: "Chia sẻ một công thức nấu ăn",
        homeShortcutsShareVideo: "Đăng tải một video hướng dẫn",
        homeShortcutsShareBlog: "Đăng tải một bài viết chia sẻ kinh nghiệm",
        homeShortcutsSuggestMenu: "Để chúng tôi đề xuất cho bạn thực đơn tuần này",
        homeShortcutsManagePreferences: "Quản lý các chỉ số cơ thể, chế độ tập luyện và các loại thực phẩm ưa thích",
        homeShortcutsHeaderGuest: "Đăng nhập để nâng cao trải nghiệm của bạn!",
        homeShortcutsSignIn: "Đăng nhập",
        homeShortcutsSignUp: "Chưa có tài khoản? Đăng ký",
        // Recipes section
        homeRecipesHeader: "Những công thức đang được chia sẻ",
        homeRecipesSeeMore: "Xem thêm",
        // Videos section
        homeVideosHeader: "Các video hướng dẫn mới nhất",
        homeVideosSeeMore: "Xem thêm",
        // Blogs section
        homeBlogsHeader: "Những bài viết mới nhất",
        homeBlogsSeeMore: "Xem thêm",
        // Sidebar
        homeSidebarExplore: "Khám phá",
        homeSidebarExploreRecipes: "Công thức nấu ăn",
        homeSidebarExploreVideos: "Video hướng dẫn",
        homeSidebarExploreBlogs: "Bài viết chia sẻ",
        homeSidebarSearch: "Tìm kiếm",
        homeSidebarSearchUrl: "Tìm kiếm nâng cao",
        homeSidebarRecommendations: "Có lẽ bạn sẽ thích",
        homeSidebarBlogs: "Bài viết phổ biến",
    }
});

// Search page
export let searchDisplayStrings = new LocalizedStrings({
    en: {
        searchResultsEmpty: "There were no results matching your criteria.",
        searchResultsInvalid: "It seems your search query was invalid.",
        // Search filters
        searchFilterType: "Article type",
        searchFilterTypeAll: "All",
        searchFilterTypeRecipes: "Recipes",
        searchFilterTypeVideos: "Videos",
        searchFilterTypeBlogs: "Blogs",
        searchFilterCategory: "Category",
        searchFilterCategoryAll: "All categories",
        searchFilterDifficulty: "Difficulty",
        searchFilterDifficultyAll: "All",
        searchFilterDifficulty1: "Beginner",
        searchFilterDifficulty2: "College student",
        searchFilterDifficulty3: "Home cook",
        searchFilterDifficulty4: "Chef",
        searchFilterDifficulty5: "Gordon Ramsay",
        searchFilterPrepTime: "Preparation time",
        searchFilterPrepTimeMinutes: "minute(s) or less",
        searchFilterSort: "Sort by",
        searchFilterSortLatest: "Latest",
        searchFilterSortOldest: "Oldest",
        searchFilterSortPopularity: "Popularity",
        searchFilterSortName: "Name",
        searchFilterQuery: "Search query",
        searchFilterQueryPlaceholder: "Search content by article title or author's name",
        searchFilterSearchButton: "Search",
        // Search tabs
        searchTabRecipes: "Recipes",
        searchTabVideos: "Videos",
        searchTabBlogs: "Blogs",
        // Search results
        searchResultsRecipesEmpty: "There were no recipes matching your criteria.",
        searchResultsVideosEmpty: "There were no videos matching your criteria.",
        searchResultsBlogsEmpty: "There were no blogs matching your criteria.",
    },
    vi: {
        searchResultsEmpty: "Không có kết quả nào phù hợp với tìm kiếm của bạn.",
        searchResultsInvalid: "Có vẻ như từ khóa tìm kiếm của bạn không hợp lệ.",
        // Search filters
        searchFilterType: "Loại nội dung",
        searchFilterTypeAll: "Toàn bộ",
        searchFilterTypeRecipes: "Công thức",
        searchFilterTypeVideos: "Video hướng dẫn",
        searchFilterTypeBlogs: "Bài viết",
        searchFilterCategory: "Loại công thức",
        searchFilterCategoryAll: "Tất cả công thức",
        searchFilterDifficulty: "Độ khó",
        searchFilterDifficultyAll: "Tất cả",
        searchFilterDifficulty1: "Người bắt đầu",
        searchFilterDifficulty2: "Sinh viên",
        searchFilterDifficulty3: "Nội trợ",
        searchFilterDifficulty4: "Đầu bếp",
        searchFilterDifficulty5: "Gordon Ramsay",
        searchFilterPrepTime: "Thời gian chế biến",
        searchFilterPrepTimeMinutes: "phút trở xuống",
        searchFilterSort: "Sắp xếp theo",
        searchFilterSortLatest: "Mới nhất",
        searchFilterSortOldest: "Cũ nhất",
        searchFilterSortPopularity: "Phổ biến nhất",
        searchFilterSortName: "Tên bài viết",
        searchFilterQuery: "Từ khóa tìm kiếm",
        searchFilterQueryPlaceholder: "Tìm kiếm nội dung với tên bài viết hoặc tác giả",
        searchFilterSearchButton: "Tìm kiếm",
        // Search tabs
        searchTabRecipes: "Công thức",
        searchTabVideos: "Video hướng dẫn",
        searchTabBlogs: "Bài viết",
        // Search results
        searchResultsRecipesEmpty: "Không có công thức nào khớp với tìm kiếm của bạn.",
        searchResultsVideosEmpty: "Không có video hướng dẫn nào khớp với tìm kiếm của bạn.",
        searchResultsBlogsEmpty: "Không có bài viết nào khớp với tìm kiếm của bạn.",
    }
})

// Browse page
export let browseDisplayStrings = new LocalizedStrings({
    en: {
        browseRecipesHeader: "Recipes",
        browseRecipesSubheader: "Vegetarian doesn't have to mean salads. Explore new and absolutely delicious recipes from our community.",
        browseVideosHeader: "Videos",
        browseVideosSubheader: "Follow along and try for yourself with these how-to videos.",
        browseBlogsHeader: "Blogs",
        browseBlogsSubheader: "Stories, thoughts, discussions and more.",
    },
    vi: {
        browseRecipesHeader: "Công thức nấu ăn",
        browseRecipesSubheader: "Ăn chay không cứ phải là ngày ba bữa rau luộc. Hãy xem những công thức tuyệt vời từ cộng đồng này!",
        browseVideosHeader: "Video hướng dẫn",
        browseVideosSubheader: "Thử làm theo những video hướng dẫn này nào!",
        browseBlogsHeader: "Bài viết chia sẻ",
        browseBlogsSubheader: "Những câu chuyện, chia sẻ, kinh nghiệm và nhiều hơn thế.",
    }
})

// View article page
export let viewDisplayStrings = new LocalizedStrings({
    en: {
        // Article toolbar
        viewArticleTranslateButton: "Translate to ",
        viewArticleRevertTranslationButton: "Translated",
        viewArticleSubmitForReview: "Submitted for review",
        viewArticleSubmitForReviewConfirm: "Submit your post for review?\nIt will be visible to others once approved by an admin.",
        viewArticleSubmitForReviewAlert: "Your post will now be visible to others when approved by an admin.",
        viewArticleSetPublic: "Public",
        viewArticleSetPublicConfirm: "Set your post to public?\nIt will be visible to everyone else.",
        viewArticleSetPublicAlert: "Your post is now public and visible to others.",
        viewArticleSetPrivate: "Private",
        viewArticleSetPrivateConfirm: "Set your post to private?\nIt will be saved as draft and no longer be visible to others.",
        viewArticleSetPrivateAlert: "Your post is now private.",
        viewArticleDeleteConfirm: "Are you sure you wish to delete this post? This is irreversible.",
        viewArticleDeleteAlert: "Your post has been deleted.",
        // Article comments
        viewArticleComments: "Comments",
        viewArticleCommentsInputPlaceholder: "Share your thoughts about this recipe...",
        viewArticleCommentsEmpty: "Be the first to comment on this recipe!",
        viewArticleCommentsSignIn: "Sign in to comment!",
        viewArticleEnableEditComment: "Edit",
        viewArticleCancelEditComment: "Cancel editing",
        viewArticleDeleteComment: "Delete",
        // View recipes
        viewRecipeLoading: "Loading the recipe...",
        viewRecipeHeaderLastEdited: "last edited",
        viewRecipeIngredients: "Ingredients",
        viewRecipeIngredientsEmpty: "It seems the creator of this recipe did not specify any ingredients...",
        viewRecipeEstimatedDifficulty: "Difficulty",
        viewRecipeEstimatedPrepTime: "Prep time",
        viewRecipeEstimatedBakingTime: "Baking time",
        viewRecipeEstimatedRestingTime: "Resting time",
        viewRecipeNutrients: "Estimated nutritional values per serving",
        viewRecipeNutritionalEstimationDisclaimer: "These values are only rough estimates based on the ingredients of this recipe.",
        viewRecipeNutritionalAccuracyDisclaimer: "Be noted that these values might be inaccurate if we could not find nutritional values for one or more ingredients.",
        viewRecipeNutrientsInvalid: "It seems we couldn't calculate the nutritional values for this recipe...",
        viewRecipeSteps: "Step-by-step instructions",
        viewRecipeStepsEmpty: "It seems there aren't any instructions for this recipe...",
        // View videos
        viewVideoLoading: "Loading the video...",
        // View blogs
        viewBlogLoading: "Loading the article...",
    },
    vi: {
        // Article toolbar
        viewArticleTranslateButton: "Dịch thành ",
        viewArticleRevertTranslationButton: "Đã dịch",
        viewArticleSubmitForReview: "Đã gửi lên xét duyệt",
        viewArticleSetPublic: "Công khai",
        viewArticleSetPrivate: "Riêng tư",
        viewArticleSubmitForReviewConfirm: "Gửi bài đăng của bạn lên xét duyệt?\nBài đăng sẽ được hiển thị với mọi người sau khi được duyệt bởi quản trị viên.",
        viewArticleSubmitForReviewAlert: "Bài đăng sẽ được hiển thị cho mọi người sau khi được duyệt bởi quản trị viên.",
        viewArticleSetPublicConfirm: "Chuyển bài đăng qua công khai?\nBài đăng sẽ được hiển thị với mọi người.",
        viewArticleSetPublicAlert: "Bài đăng đã được công khai và hiển thị với mọi người.",
        viewArticleSetPrivateConfirm: "Chuyển bài đăng về riêng tư?\nBài đăng sẽ được lưu dưới dạng bản nháp và chỉ hiển thị với bạn.",
        viewArticleSetPrivateAlert: "Bài đăng đã chuyển về trạng thái riêng tư.",
        viewArticleDeleteConfirm: "Bạn chắc chắn muốn xóa bài đăng này? Đây là một đi không trở về đấy.",
        viewArticleDeleteAlert: "Bài đăng đã bị xóa.",
        // Article comments
        viewArticleComments: "Bình luận",
        viewArticleCommentsInputPlaceholder: "Bạn nghĩ sao về công thức này?",
        viewArticleCommentsEmpty: "Hãy là người đầu tiên bình luận về công thức này!",
        viewArticleCommentsSignIn: "Hãy đăng nhập để bình luận!",
        viewArticleEnableEditComment: "Chỉnh sửa",
        viewArticleCancelEditComment: "Hủy",
        viewArticleDeleteComment: "Xóa bình luận",
        // View recipes
        viewRecipeLoading: "Đang tải công thức...",
        viewRecipeHeaderLastEdited: "chỉnh sửa lần cuối",
        viewRecipeIngredients: "Nguyên liệu",
        viewRecipeIngredientsEmpty: "Có vẻ như tác giả của công thức này đã không liệt kê bất kỳ nguyên liệu nào...",
        viewRecipeEstimatedDifficulty: "Độ khó",
        viewRecipeEstimatedPrepTime: "Chế biến",
        viewRecipeEstimatedBakingTime: "Nướng",
        viewRecipeEstimatedRestingTime: "Để món nghỉ",
        viewRecipeNutrients: "Dinh dưỡng ước tính cho mỗi phần ăn",
        viewRecipeNutritionalEstimationDisclaimer: "Những giá trị dinh dưỡng này được ước tính dựa trên các thành phần trong công thức.",
        viewRecipeNutritionalAccuracyDisclaimer: "Những giá trị này có thể thiếu chính xác nếu chúng tôi không thể tìm được giá trị dinh dưỡng của một hoặc nhiều thành phần.",
        viewRecipeNutrientsInvalid: "Có vẻ như chúng tôi không thể tính được giá trị dinh dưỡng cho công thức này...",
        viewRecipeSteps: "Hướng dẫn từng bước",
        viewRecipeStepsEmpty: "Có vẻ như công thức này lại không có chỉ dẫn...",
        // View videos
        viewVideoLoading: "Đang tải video...",
        // View blogs
        viewBlogLoading: "Đang tải bài viết...",
    }
})