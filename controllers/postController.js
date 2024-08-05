const getPosts = async (req, res) => {
  try {
    console.log('getPosts', req.body);

    res.status(200).json({
      posts: [],
      message: 'posts fetch successfully',
    });
  } catch (error) {
    console.log('error->>', error);
    res.status(500).json({ error: 'something went wrong' });
  }
};

module.exports = {
  getPosts,
};
